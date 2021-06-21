import React, { Fragment } from 'react'
import { LazyImage } from '../Image'
import imgRecoverErrorPortrait from '../../assets/images/backgrounds/onerror/error-portrait.png'
import imgRecoverErrorLandscape from '../../assets/images/backgrounds/onerror/error-landscape.png'

export function Img({ title, posterType, imgPortrait, imgLandscape, imgSquare, imgError }) {
	const altImg = `img-${title}`

	return (
		<Fragment>
			{posterType == 0 &&
                <LazyImage img={imgPortrait} alt={altImg} type="webp" recoverType="jpg" imgError={imgError ? imgError : imgRecoverErrorPortrait} />
			}
			{posterType == 1 &&
                <LazyImage img={imgLandscape} alt={altImg} type="webp" recoverType="jpg" imgError={imgError ? imgError : imgRecoverErrorLandscape} />
			}
			{posterType == 2 &&
				<LazyImage img={imgSquare} alt={altImg} type="webp" recoverType="jpg" imgError={imgError ? imgError : imgRecoverErrorLandscape} />
			}
		</Fragment>
	)
}
