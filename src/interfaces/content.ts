import type { iBlog } from './blog';
import type { iHobby } from './hobby';
import type { iService } from './service';
import type { iPortfolio } from './portfolio';

export interface iContent
{
    language: string,
    dir: 'rtl' | 'ltr',
    technologies: string,
    about_me: string,
    my_name: string,
    my_skills: string[],
    currency: string,
    typing_effect: string[],
    download_cv: string,
    category: string,
    author: string,
    id: string,
    order_now: string,
    source_code: string,
    source: string,
    created_at: string,
    send_message: string,
    explore_more: string,
    read_more: string,
    blog_not_found: string,
    phone: string,
    my_phone: string,
    whatsapp: string,
    telegram: string,
    email: string,
    gmail: string,
    chmail: string,
    my_email: string,
    my_gmail: string,
    my_chmail: string,
    name: string,
    message: string,
    residence: string,
    city: string,
    age: string,
    my_residence: string,
    my_city: string,
    my_age: string,
    english: string,
    persian: string,
    german: string,
    home: string,
    contact: string,
    portfolio: string,
    blogs: string,
    hobbies: string,
    error:
        {
            not_found:
                {
                    title: string,
                    description: string
                },
            empty: string,
            incorrect_email: string
        },
    titles: string[],
    headers: string[],
    categories: string[],
    my_blogs: iBlog[],
    my_hobbies: iHobby[],
    services: iService[],
    my_portfolio: iPortfolio[]
}
