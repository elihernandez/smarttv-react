import { memo } from 'react'
import { MemoizedLoaderLogo } from './LoaderLogo'
import { MemoizedLoaderVideo } from './LoaderVideo'
import { MemoizedLoaderSpinner } from './LoaderSpinner'
import { MemoizedLoaderSection } from './LoaderSection'
import './styles.css'

const LoaderLogo = memo(MemoizedLoaderLogo)
const LoaderVideo = memo(MemoizedLoaderVideo)
const LoaderSpinner = memo(MemoizedLoaderSpinner)
const LoaderSection = memo(MemoizedLoaderSection)

export {
	LoaderLogo,
	LoaderVideo,
	LoaderSpinner,
	LoaderSection
}