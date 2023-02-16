import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { BsArrowsFullscreen } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';

import { setImagePortfolio } from '../../app/portfolio/portfolio.actions';

import stylesPortfolio from '../../styles/pages/portfolio.module.scss';

const ButtonSecondary = dynamic(() => import('../button/button-secondary.component'));

const PortfolioCard = (props: { text: string, portfolio: { image: string, title: string, tag: string, description: string, link: string }}) =>
{
    const dispatch = useDispatch();
    const tagPortfolio = useSelector((state: any) => state.portfolio.tagPortfolio);

    return (
        tagPortfolio === 'all' || props.portfolio?.tag === tagPortfolio
            ? (
                <div className={stylesPortfolio.portfolioItem}>
                    <Image
                        onClick={() =>
                        {
                            dispatch(setImagePortfolio(true, props.portfolio?.image, props.portfolio?.title));
                        }}
                        src={ props.portfolio?.image }
                        alt={ props.portfolio?.title }
                        layout='fill'
                    />

                    <i onClick={() =>
                    {
                        dispatch(setImagePortfolio(true, props.portfolio?.image, props.portfolio?.title));
                    }}>
                        <BsArrowsFullscreen size={17}/>
                    </i>

                    <div className={stylesPortfolio.portfolioItemBox}>
                        <h2>
                            { props.portfolio?.title }
                        </h2>

                        <p>
                            { props.portfolio?.description }
                        </p>

                        <ButtonSecondary
                            a={true}
                            link={props.portfolio?.link}
                            text={props.text}
                        />
                    </div>
                </div>
            )
            : null
    );
};

export default PortfolioCard;