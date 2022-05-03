import { Validators } from './Validator';

describe('Shared domain validators', () => {
    it('should say that valid url is valid', () => {
        const validURLs = ['https://namaewa.online', 'http://namaewa.online'];
        for (const url of validURLs) {
            expect(Validators.isValidURL(url)).toBe(true);
        }
    });

    it('should say that invalid url is invalid', () => {
        const invalidURLs = ['://namaewa.online', 'hitutor', '', 'n', 'x.3'];
        for (const url of invalidURLs) {
            expect(Validators.isValidURL(url)).toBe(false);
        }
    });
});
