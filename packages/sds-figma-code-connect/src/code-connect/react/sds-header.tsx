import React from 'react';
import figma from '@figma/code-connect';
import { SdsHeader, SdsHeaderAuth } from 'sds-react-components';

figma.connect(SdsHeader, '<FIGMA_SECTIONS_HEADER>');
figma.connect(SdsHeaderAuth, '<FIGMA_SECTIONS_HEADER_AUTH>');
