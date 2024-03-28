import type { QRL, QwikIntrinsicElements, Signal } from '@builder.io/qwik';
import type { BorderSizeProps, MarginProps, PaddingProps, SizeProps } from '../props';
import type { GapProps } from '../props/gap.props';
import type { GridProps } from '../props/grid.props';
import type { ShadowProps } from '../props/shadow.props';

type NativeDiv = QwikIntrinsicElements['div'];

export interface ModalProps extends NativeDiv, PaddingProps, MarginProps, SizeProps, BorderSizeProps, ShadowProps, GapProps, GridProps {
  prose?: boolean;
  showModal: Signal<boolean>;
  title: string;
  cancelLabel: string;
  confirmLabel: string;
  cancelAction: QRL<() => void>;
  confirmAction: QRL<(values: unknown) => void>;
}
