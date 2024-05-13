import { ModalProps } from './Modal';
import { default as React } from '../../../node_modules/react';

export interface ConfirmModalProps extends ModalProps {
    title: string;
    children: React.ReactNode;
    primaryButtonText?: string;
    secondaryButtonText?: string;
    primaryButtonBackgroundColor?: string;
    secondaryButtonBackgroundColor?: string;
    primaryButtonFontColor?: string;
    secondaryButtonFontColor?: string;
}
declare const ConfirmModal: React.FC<ConfirmModalProps>;
export default ConfirmModal;
