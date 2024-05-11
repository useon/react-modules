import { ModalProps } from './Modal';

export declare const ModalBackdrop: import('styled-components').IStyledComponent<"web", import('styled-components/dist/types').FastOmit<import('../../../node_modules/react').DetailedHTMLProps<import('../../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>;
export declare const ModalContentWrapper: import('styled-components').IStyledComponent<"web", import('styled-components/dist/types').Substitute<import('../../../node_modules/react').DetailedHTMLProps<import('../../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, Pick<ModalProps, "position" | "size">>>;
export declare const ModalHeader: import('styled-components').IStyledComponent<"web", import('styled-components/dist/types').FastOmit<import('../../../node_modules/react').DetailedHTMLProps<import('../../../node_modules/react').HTMLAttributes<HTMLElement>, HTMLElement>, never>>;
interface ModalTitleProps {
    fontSize?: string;
    fontWeight?: string;
}
export declare const ModalTitle: import('styled-components').IStyledComponent<"web", import('styled-components/dist/types').Substitute<import('../../../node_modules/react').DetailedHTMLProps<import('../../../node_modules/react').HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, ModalTitleProps>>;
export declare const ModalIconButton: import('styled-components').IStyledComponent<"web", import('styled-components/dist/types').Substitute<import('../../../node_modules/react').DetailedHTMLProps<import('../../../node_modules/react').ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {
    imgSize?: string | undefined;
}>>;
interface ModalTextButtonProps {
    buttonWidth?: string;
    buttonHeight?: string;
    fontSize?: string;
    backgroundColor?: string;
    fontColor?: string;
}
export declare const ModalTextButton: import('styled-components').IStyledComponent<"web", import('styled-components/dist/types').Substitute<import('../../../node_modules/react').DetailedHTMLProps<import('../../../node_modules/react').ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, ModalTextButtonProps>>;
interface ModalContentProps {
    fontSize?: string;
}
export declare const ModalContent: import('styled-components').IStyledComponent<"web", import('styled-components/dist/types').Substitute<import('../../../node_modules/react').DetailedHTMLProps<import('../../../node_modules/react').HTMLAttributes<HTMLElement>, HTMLElement>, ModalContentProps>>;
export declare const ModalInput: import('styled-components').IStyledComponent<"web", import('styled-components/dist/types').FastOmit<import('../../../node_modules/react').DetailedHTMLProps<import('../../../node_modules/react').InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, never>>;
interface ModalFooterProps {
    buttonPosition?: 'left' | 'center' | 'right';
    buttonGap?: string;
}
export declare const ModalFooter: import('styled-components').IStyledComponent<"web", import('styled-components/dist/types').Substitute<import('../../../node_modules/react').DetailedHTMLProps<import('../../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ModalFooterProps>>;
export {};
