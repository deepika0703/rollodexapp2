import Card from '../Card/Card.component'
import '../Card-list/Card-list.styles.css'

const CardList = props  => {
    const {monsters} = props
    return (
            <div className='card-list'>
                {
                    monsters.map(
                        (monster,index) =>(
                            <Card key={index} monster={monster} />
                        )
                        )
                        }
               
            </div>
    )
}

export default CardList