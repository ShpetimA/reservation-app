import React, { useEffect, useState } from 'react'
import CompanyItems from './CompanyItems'

export type timeSlotData = {
    id: number
    name: string
    type: string
    time_slots: Array<{
        start_time: string
        end_time: string
    }>
}

const Companys = () => {
    const [companys, setCompanys] = useState<Array<timeSlotData>>([])

    useEffect(() => {
        const fetchCompanys = async () => {
            const resposne = await fetch(' http://localhost:3000/companys')

            const responseData : Array<timeSlotData> = await resposne.json()
            const loadedData = responseData.map((item : timeSlotData) => {
                return {
                    id: item.id,
                    name: item.name,
                    type: item.type,
                    time_slots: item.time_slots,
                }
            })

            setCompanys(loadedData)
        }
        fetchCompanys()
    }, [])
    return <CompanyItems companys={companys} />
}

export default Companys
