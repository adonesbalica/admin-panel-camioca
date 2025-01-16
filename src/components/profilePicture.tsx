import Image from 'next/image'

interface ProfilePictureProps {
  src: string
  alt: string
  size?: number
}

export const ProfilePicture = ({
  src,
  alt,
  size = 100,
}: ProfilePictureProps) => {
  return (
    <div
      className="overflow-hidden rounded-full"
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt={alt}
        width={100}
        height={100}
        className="object-cover"
      />
    </div>
  )
}
