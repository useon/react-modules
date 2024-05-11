import { ModalProps } from './Modal';

export interface PromptModalProps extends ModalProps {
    title: string;
}
declare const PromptModal: React.FC<PromptModalProps>;
export default PromptModal;
