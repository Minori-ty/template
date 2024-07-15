import { useMachine } from '@xstate/react'
import axios from 'axios'
import { useEffect } from 'react'
import { createMachine } from 'xstate'

// 定义状态机
const pageStateMachine = createMachine({
    id: 'page',
    initial: 'loading',
    states: {
        loading: {
            on: {
                FETCH_SUCCESS: 'content',
                FETCH_FAILURE: 'error',
            },
        },
        content: {
            type: 'final',
        },
        error: {
            type: 'final',
        },
    },
})

const PageComponent = () => {
    const [state, send] = useMachine(pageStateMachine)
    // const [data, setData] = useState<{ content: string } | null>(null)

    useEffect(() => {
        axios
            .get('http://127.0.0.1:5000/user')
            .then(() => {
                // setData(response.data)
                send({ type: 'FETCH_SUCCESS' })
            })
            .catch((error) => {
                console.error(error)
                send({ type: 'FETCH_FAILURE' })
            })
    }, [send])

    switch (state.value) {
        case 'loading':
            return <div>Loading...</div>
        case 'content':
            return <div>数据</div>
        case 'error':
            return <div>Error loading data</div>
        default:
            return null
    }
}

export default PageComponent
