import Image from 'next/image'

export default function Loader() {
  return (
    <div className="loader">
      <Image
        src="/assets/icons/loader.svg"
        width={32}
        height={32}
        alt="loader"
        className="animate-spin"
      />
      Loading...
    </div>
  )
}
