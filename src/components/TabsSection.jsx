import Button from './Button/Button'

export default function TabsSection({ active, onChange }) {
  return (
    <section style={{ marginBottom: '1rem' }}>
      <Button isActive={active === 'main'} buttonClicked={() => onChange('main')}>
        Главная
      </Button>
      <Button
        isActive={active === 'feedback'}
        buttonClicked={() => onChange('feedback')}
      >
        Обратная связь
      </Button>
      <Button isActive={active === 'effect'} buttonClicked={() => onChange('effect')}>
        Effects
      </Button>
    </section>
  )
}
