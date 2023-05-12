import { createI18n } from "vue-i18n";
import en from "@/locales/en.json";
import fr from "@/locales/fr.json";
export default createI18n({
    locale: "en", // change this to fr to enable french translation
    fallbackLocale: "en",
    messages: {
        en,
        fr,
    },
    numberFormats: {
        en: {
            currency: {
                "style": "currency",
                currency: "USD",
                currencyDisplay: "symbol"
            }
        },
        ja: {
            currency: {
                "style": "currency",
                currency: "JPY",
                currencyDisplay: "symbol",
            }
        },
    }
})