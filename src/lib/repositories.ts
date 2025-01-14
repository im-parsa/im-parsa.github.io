import axios from 'axios';

import type { IRepository } from '../interfaces/repository';

export class RepositoryService
{
    public async GET()
    {
        try
        {
            const { data } = await axios({
                method: 'get',
                url: 'https://api.github.com/users/im-parsa/repos',
                headers:
                    {
                        Authorization: `Bearer ${ process.env.MONGODB_URI }`,
                        'Content-Type': 'application/json'
                    },
                auth:
                    {
                        username: process.env.GITHUB_USERNAME || '',
                        password: process.env.GITHUB_PASSWORD || ''
                    }
            });

            return {
                items:
                    [
                        ...data
                            .filter((repo: IRepository) =>
                            {
                                return repo?.stargazers_count >= 5;
                            })
                            .sort((firstRepo: IRepository, secondRepo: IRepository) =>
                            {
                                return secondRepo?.stargazers_count - firstRepo?.stargazers_count;
                            })
                    ]
            };
        }
        catch (error)
        {
            console.log(error);

            return { status: 'fail', statusCode: 500, message: 'Internal error' };
        }
    }
}

export default RepositoryService;
