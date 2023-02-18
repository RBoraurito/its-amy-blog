interface SkillCardProps {
  title: string
  description: string
}

export const TextDescCard = ({ title, description }: SkillCardProps) => {
  return (
    <div>
      <h3 className="text-xl font-bold text-gray-600 mb-4">{title}</h3>
      <p className="text-gray-500">{description}</p>
    </div>
  )
}
