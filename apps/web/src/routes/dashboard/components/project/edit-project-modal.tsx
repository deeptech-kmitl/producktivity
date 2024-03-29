import { Signal, component$, $, Fragment } from '@builder.io/qwik';
import { useNavigate, type DocumentHead } from '@builder.io/qwik-city';
import { useForm, required } from '@modular-forms/qwik';
import { Box, TextInput, UIModal } from '@producktivity/ui';
import { useEditProjectFormLoader } from '../../project/[id]';
import { Toaster, toast } from 'qwik-sonner';

interface EditProjectModalProps {
  showModal: Signal<boolean>;
  currentName: string | undefined;
  currentId: string | undefined;
}

export type ProjectFormProps = {
  projectName: string;
};

export const EditProjectModal = component$(({ showModal, currentName, currentId }: EditProjectModalProps) => {
  const nav = useNavigate();
  const [_projectForm, { Form, Field }] = useForm<ProjectFormProps>({
    loader: useEditProjectFormLoader(),
  });

  const confirmAction = $(async (values: ProjectFormProps) => {
    await fetch(`${import.meta.env.VITE_API_URL}/projects`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: currentId,
        name: values.projectName,
      }),
    }).then(async () => {
      showModal.value = false;
      toast.success('Saved editing');

      await nav();
    });
  });

  const cancelAction = $(() => {
    showModal.value = false;
  });

  return (
    <Fragment>
      <Form onSubmit$={(values) => confirmAction(values)}>
        <UIModal width="1/3" rounded="md" cancelLabel="Cancel" confirmLabel="Create" showModal={showModal} title="Create new project" cancelAction={cancelAction}>
          <Box gap="1" width="full">
            <Field name="projectName" validate={required<string>('Please enter your name.')}>
              {(field, props) => <TextInput {...props} value={field.value} error={field.error} type="text" label="Project name" placeholder={currentName} required />}
            </Field>
          </Box>
        </UIModal>
      </Form>
      <Toaster position="bottom-right" richColors />{' '}
    </Fragment>
  );
});

export const head: DocumentHead = {
  title: 'Create Project form',
};
