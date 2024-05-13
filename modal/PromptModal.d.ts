import { ModalProps } from './Modal';

export interface PromptModalProps extends ModalProps {
    title: string;
    primaryButtonText?: string;
    secondaryButtonText?: string;
    primaryButtonBackgroundColor?: string;
    secondaryButtonBackgroundColor?: string;
    primaryButtonFontColor?: string;
    secondaryButtonFontColor?: string;
}
declare const PromptModal: React.FC<PromptModalProps>;
export default PromptModal;
