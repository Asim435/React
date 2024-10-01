import { fabClasses } from '@mui/material';
import configuration from './../Configuration/Configuration';
import Axios from './AxiosServices';
import { empDataType } from '../Components/CrudOperation/CrudOperation';
const axios: any = new Axios()
interface extendedEmpDataType extends empDataType {
    id: number;
}
export default class CrudServices {
    createRecord(data: empDataType) {
        return axios.post(configuration.createRecord, data, false)
    }
    deleteRecord(id: number) {

        return axios.delete(configuration.deleteRecord, id, {
            headers: {
                // Add headers if needed
                'Content-Type': 'application/json'
            }
        })
    }
    updateRecord(id: number, data: extendedEmpDataType) {

        return axios.put(configuration.updateRecord, id, { headers: { 'Content-Type': 'application/json' } }, data)
    }


}


