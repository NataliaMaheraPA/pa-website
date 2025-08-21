import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
import withSvgr from 'next-svgr';

const withNextIntl = createNextIntlPlugin('./src/lib/i18n/request.ts');

const nextConfig: NextConfig = {};

export default withNextIntl(withSvgr(nextConfig));