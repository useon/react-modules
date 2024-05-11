import { ModalProps } from './Modal';
import { default as React } from '../../../node_modules/react';

export interface ConfirmModalProps extends ModalProps {
    title: string;
    children: React.ReactNode;
}
declare const ConfirmModal: React.FC<ConfirmModalProps>;
export default ConfirmModal;
