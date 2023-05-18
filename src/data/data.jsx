import { posts } from 'rule34js';
export let search =  async () => {
    let resp = await posts({tags:["overwatch"],limit: 50}).then(res => {
        return res
    }).catch(err => {
        console.log(err)
    })
    return resp

}