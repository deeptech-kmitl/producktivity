import { Signal, component$, $ } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';
import { useForm, required } from '@modular-forms/qwik';
import { Box, TextInput, UIModal, UISelect } from '@producktivity/ui';
import { useFormLoader } from '../../[slug]';

interface CreateProjectModalProps {
  showModal: Signal<boolean>;
}

export type ProjectFormProps = {
  projectName: string;
  templateId: string;
};

const data = [
  {
    id: '1',
    userId: '1',
    name: 'Kmitl Template',
  },
  {
    id: '2',
    userId: '2',
    name: 'IT Innovation',
  },
];

export const CreateProjectModal = component$(({ showModal }: CreateProjectModalProps) => {
  const [projectForm, { Form, Field }] = useForm<ProjectFormProps>({
    loader: useFormLoader(),
  });

  const confirmAction = $((values: unknown) => {
    console.log(values);
  });

  const cancelAction = $(() => {
    showModal.value = false;
  });

  return (
    <Form onSubmit$={(values) => confirmAction(values)}>
      <UIModal width="1/3" rounded="md" cancelLabel="Cancel" confirmLabel="Create" showModal={showModal} title="Create new project" confirmAction={$((v) => confirmAction(v))} cancelAction={cancelAction}>
        <Box gap="1" width="full">
          <Field name="projectName" validate={required<string>('Please enter your name.')}>
            {(field, props) => <TextInput {...props} value={field.value} error={field.error} type="text" label="Project name" placeholder="John Doe" required />}
          </Field>
          <Field name="templateId" validate={required<string>('Please select the payment type.')}>
            {(field, props) => <UISelect {...props} value={field.value} options={data} error={field.error} label="Template" placeholder="Select Template" required />}
          </Field>
        </Box>
      </UIModal>
    </Form>
  );
});

export const head: DocumentHead = {
  title: 'Create Project form',
};
