import { NoSerialize, createContextId } from '@builder.io/qwik';
import { Canvas } from 'fabric';

export const Frame = createContextId<{ frame: NoSerialize<Canvas> | undefined }>('frame');
