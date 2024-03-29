import { Slot, component$ } from '@builder.io/qwik';
import { PropsBuilder } from '../props/props';
import type { ModalProps } from './modal.props';
import { Modal, ModalContent, ModalFooter, ModalHeader } from '@qwik-ui/headless';
import { LuXCircle } from '@qwikest/icons/lucide';
import { Button, Text } from '..';

export const UIModal = component$<ModalProps>((props) => {
  const { showModal, title, cancelLabel, confirmLabel, cancelAction, confirmAction } = props;

  const additionalProps = new PropsBuilder(props).withSize().withPadding().withMargin().withBorderRadius().withGrid().withGap().withShadow().build();

  return (
    <Modal bind:show={showModal} class={[additionalProps, 'bg-surface text-primary rounded-md max-w-[25rem] p-[35px] shadow-md backdrop:backdrop-blur backdrop:backdrop-brightness-50 dark:backdrop:backdrop-brightness-100']}>
      <ModalHeader>
        <h2 class="text-lg font-bold">{title}</h2>
      </ModalHeader>
      <ModalContent class="mb-2 pb-4 pt-2">
        <Slot />
      </ModalContent>
      <ModalFooter class="flex justify-end gap-4">
        <Button rounded="md" variant="secondary" onClick$={cancelAction}>
          <Text theme="secondary">{cancelLabel}</Text>
        </Button>
        <Button rounded="md" variant="primary" onClick$={confirmAction} type="submit">
          <Text theme="surface">{confirmLabel}</Text>
        </Button>
      </ModalFooter>
      <button onClick$={() => (showModal.value = false)} class="absolute right-6 top-[26px]">
        <LuXCircle />
      </button>
    </Modal>
  );
});
// () => (showModal.value = false);
