import { Signal, component$, $, useVisibleTask$, useSignal, useTask$ } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';
import { useForm, required } from '@modular-forms/qwik';
import { Box, TextInput, UIModal, UISelect } from '@producktivity/ui';
import { useFormLoader } from '../../[slug]';
import { useUser } from '../../../layout';

interface CreateProjectModalProps {
  showModal: Signal<boolean>;
}

export type ProjectFormProps = {
  projectName: string;
  templateId: string;
};

interface dataTemplateProps {
  data: Template[];
}

export const CreateProjectModal = component$(({ showModal }: CreateProjectModalProps) => {
  const userSignal = useUser();
  const templateList = useSignal<dataTemplateProps>({ data: [] });
  const [projectForm, { Form, Field }] = useForm<ProjectFormProps>({
    loader: useFormLoader(),
  });

  useTask$(async () => {
    const temp = await fetch(`${import.meta.env.VITE_API_URL}/templates?userId=${userSignal.value.id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    templateList.value = await temp.json();
  });

  const confirmAction = $(async (values: ProjectFormProps) => {
    await fetch(`${import.meta.env.VITE_API_URL}/projects`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: userSignal.value.id,
        name: values.projectName,
        templateId: values.templateId,
      }),
    }).then(() => {
      showModal.value = false;
    });
  });

  const cancelAction = $(() => {
    showModal.value = false;
  });

  return (
    <Form onSubmit$={(values) => confirmAction(values)}>
      <UIModal width="1/3" rounded="md" cancelLabel="Cancel" confirmLabel="Create" showModal={showModal} title="Create new project" cancelAction={cancelAction}>
        <Box gap="1" width="full">
          <Field name="projectName" validate={required<string>('Please enter your name.')}>
            {(field, props) => <TextInput {...props} value={field.value} error={field.error} type="text" label="Project name" placeholder="John Doe" required />}
          </Field>
          <Field name="templateId" validate={required<string>('Please select the payment type.')}>
            {(field, props) => <UISelect {...props} value={field.value} options={templateList.value.data} error={field.error} label="Template" placeholder="Select Template" required />}
          </Field>
        </Box>
      </UIModal>
    </Form>
  );
});

export const head: DocumentHead = {
  title: 'Create Project form',
};
