import React, { } from 'react';
import * as S from "./styles";
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'

export default function Stars({ rate }) {
    return (
        <S.BoxStars>
            {rate === 'ruim' && (
                <>
                    <BsStarFill />
                    <BsStarFill />
                    <BsStar />
                    <BsStar />
                    <BsStar />
                </>
            )}
            {rate === 'medio' && (
                <>
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStar />
                    <BsStar />
                </>
            )}
            {rate === 'bom' && (
                <>
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStar />
                </>
            )}
            {rate === 'mtbom' && (
                <>
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarHalf />
                </>
            )}
            {rate === 'perfeito' && (
                <>
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                </>
            )}
        </S.BoxStars>
    )
}