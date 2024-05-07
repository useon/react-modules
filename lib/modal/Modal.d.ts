import { default as React, HTMLAttributes, CSSProperties } from '../../../node_modules/react';

export interface ModalProps extends React.PropsWithChildren {
    children?: React.ReactNode;
    isOpen: boolean;
    position: 'top' | 'bottom' | 'center';
    style?: CSSProperties;
    onClose: () => void;
}
declare const Modal: React.FC<ModalProps> & {
    Header: ModalHeaderType;
    Title: ModalTitleType;
    IconButton: ModalIconButtonType;
    TextButton: ModalTextButtonType;
    Content: ModalContentType;
    Footer: ModalFooterType;
};
type ModalHeaderType = React.FC<React.PropsWithChildren<HTMLAttributes<HTMLElement>>>;
type ModalTitleType = React.FC<React.PropsWithChildren<HTMLAttributes<HTMLSpanElement>>>;
type ModalIconButtonType = React.FC<React.PropsWithChildren<{
    onClose: () => void;
    src: string;
    imgSize?: string;
} & HTMLAttributes<HTMLButtonElement>>>;
type ModalTextButtonType = React.FC<React.PropsWithChildren<{
    onClose: () => void;
    buttonSize?: string;
    fontSize?: string;
} & HTMLAttributes<HTMLButtonElement>>>;
type ModalContentType = React.FC<React.PropsWithChildren<HTMLAttributes<HTMLElement>>>;
type ModalFooterType = React.FC<React.PropsWithChildren<HTMLAttributes<HTMLDivElement>>>;
export default Modal;
