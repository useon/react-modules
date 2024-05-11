import { default as React, ButtonHTMLAttributes, HTMLAttributes } from '../../../node_modules/react';

export interface ModalProps extends React.PropsWithChildren, Pick<HTMLAttributes<HTMLElement>, 'style'> {
    children?: React.ReactNode;
    isOpen: boolean;
    position: 'top' | 'bottom' | 'center';
    size?: 'small' | 'medium' | 'large';
    onClose: () => void;
}
declare const Modal: React.FC<ModalProps> & {
    Header: ModalHeaderType;
    Title: ModalTitleType;
    IconButton: ModalIconButtonType;
    TextButton: ModalTextButtonType;
    Content: ModalContentType;
    Input: ModalInputType;
    Footer: ModalFooterType;
};
type ModalHeaderType = React.FC<React.PropsWithChildren<HTMLAttributes<HTMLElement>>>;
type ModalTitleType = React.FC<React.PropsWithChildren<HTMLAttributes<HTMLSpanElement>>>;
type ModalIconButtonType = React.FC<React.PropsWithChildren<{
    actionFn: () => void;
    src: string;
    imgSize?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>>>;
type ModalTextButtonType = React.FC<React.PropsWithChildren<{
    actionFn: () => void;
    buttonWidth?: string;
    buttonHeight?: string;
    fontSize?: string;
    backgroundColor?: string;
    fontColor?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>>>;
type ModalContentType = React.FC<React.PropsWithChildren<HTMLAttributes<HTMLElement>>>;
type ModalInputType = React.FC<React.PropsWithChildren<HTMLAttributes<HTMLElement>>>;
type ModalFooterType = React.FC<React.PropsWithChildren<{
    buttonPosition?: 'left' | 'center' | 'right';
    buttonGap?: string;
} & HTMLAttributes<HTMLDivElement>>>;
export default Modal;
