import { ModalProps } from './Modal';
import { default as React } from '../../../node_modules/react';

export interface AlertModalProps extends ModalProps {
    title: string;
    message: string;
}
declare const AlertModal: React.FC<AlertModalProps>;
export default AlertModal;
