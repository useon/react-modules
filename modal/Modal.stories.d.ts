import { default as Modal } from './Modal';
import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: import('../../../node_modules/react').FC<import('./Modal').ModalProps> & {
        Header: import('../../../node_modules/react').FunctionComponent<import('../../../node_modules/react').PropsWithChildren<import('../../../node_modules/react').HTMLAttributes<HTMLElement>>>;
        Title: import('../../../node_modules/react').FunctionComponent<import('../../../node_modules/react').PropsWithChildren<import('../../../node_modules/react').HTMLAttributes<HTMLSpanElement>>>;
        IconButton: import('../../../node_modules/react').FunctionComponent<import('../../../node_modules/react').PropsWithChildren<{
            actionFn: () => void;
            src: string;
            imgSize?: string | undefined;
        } & import('../../../node_modules/react').ButtonHTMLAttributes<HTMLButtonElement>>>;
        TextButton: import('../../../node_modules/react').FunctionComponent<import('../../../node_modules/react').PropsWithChildren<{
            actionFn: () => void;
            buttonWidth?: string | undefined;
            buttonHeight?: string | undefined;
            fontSize?: string | undefined;
            backgroundColor?: string | undefined;
            fontColor?: string | undefined;
        } & import('../../../node_modules/react').ButtonHTMLAttributes<HTMLButtonElement>>>;
        Content: import('../../../node_modules/react').FunctionComponent<import('../../../node_modules/react').PropsWithChildren<import('../../../node_modules/react').HTMLAttributes<HTMLElement>>>;
        Input: import('../../../node_modules/react').FunctionComponent<import('../../../node_modules/react').PropsWithChildren<import('../../../node_modules/react').HTMLAttributes<HTMLElement>>>;
        Footer: import('../../../node_modules/react').FunctionComponent<import('../../../node_modules/react').PropsWithChildren<{
            buttonPosition?: "center" | "left" | "right" | undefined;
            buttonGap?: string | undefined;
        } & import('../../../node_modules/react').HTMLAttributes<HTMLDivElement>>>;
    };
    parameters: {
        layout: string;
        docs: {
            description: {
                component: string;
            };
        };
    };
    argTypes: {
        isOpen: {
            control: "boolean";
            default: boolean;
            description: string;
            table: {
                type: {
                    summary: string;
                };
            };
        };
        onClose: {
            description: string;
        };
        style: {
            control: "object";
            table: {
                type: {
                    summary: string;
                };
            };
            description: string;
        };
        position: {
            control: {
                type: "radio";
            };
            options: string[];
            description: string;
        };
        size: {
            control: {
                type: "radio";
            };
            options: string[];
            description: string;
        };
    };
    args: {
        onClose: import('@vitest/spy').Mock<[], void>;
    };
    render: ({ style, ...args }: import('./Modal').ModalProps) => import("react/jsx-runtime").JSX.Element;
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof Modal>;
export declare const 기본: Story;
export declare const 이미지_버튼이_있는_모달: Story;
export declare const 텍스트_버튼이_있는_모달: Story;
export declare const 이미지_버튼과_텍스트_버튼이_있는_모달: Story;
export declare const 확인_모달: Story;
export declare const 확인_취소_모달: Story;
export declare const 입력_모달: Story;
