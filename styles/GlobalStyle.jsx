import { createGlobalStyle } from 'styled-components';
import {body1, text, background, gradientDevice, mobile} from '@sberdevices/plasma-tokens';
import { darkSber } from '@sberdevices/plasma-tokens/themes';

const DocumentStyle = createGlobalStyle`
    /* stylelint-disable-next-line selector-nested-pattern */
    html, body {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    body {
          margin: 0;
          padding: 0;
    }
    /* stylelint-disable-next-line selector-nested-pattern, selector-max-id */
    #__next {
        width: 100%;
        height: 100%;
    }
    /* stylelint-disable-next-line selector-nested-pattern */
    .focus-visible {
        outline: 0 none;
    }
`;


const ColorThemeStyle = createGlobalStyle(darkSber);

export const GlobalStyle = () => {
    return (
        <>
            <DocumentStyle />
            <ColorThemeStyle />
        </>
    );
};
