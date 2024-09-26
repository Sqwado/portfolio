import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t } = useTranslation();

    return (
        <div className="p-4">
            <h1 className="text-2xl">{t('contact')}</h1>
            <form className="mt-4">
                <input
                    type="text"
                    placeholder="Name"
                    className="border p-2 mb-2 w-full"
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="border p-2 mb-2 w-full"
                />
                <textarea
                    placeholder="Message"
                    className="border p-2 mb-2 w-full"
                ></textarea>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2">
                    Send
                </button>
            </form>
        </div>
    );
};

export default Contact;
