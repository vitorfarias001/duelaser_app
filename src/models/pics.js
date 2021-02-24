import AsyncStorage from '@react-native-async-storage/async-storage';


export class Pic {
    name;
    image;
    #registrationDateTime;
    #next;

    constructor(name, image){
        this.name = name;
        this.image = image;
        this.registrationDateTime = new Date();
    }

    set next(value){
        this.#next = value;
    }

    get next(){
        return this.#next;
    }

    get registrationDateTime(){
        return this.registrationDateTime;
    }

}

export class Pics {

    #list = [];

    get lastItem(){
        const list = this.listItems();
        return list[list.length - 1]
    }
    
    listItems(){
        async function loop(index){
            const item = await AsyncStorage.getItem(`${index}`);
            item.index = index;
            this.#list.push(item);
            if(item.next !== null) loop(item.next);
        }
        loop(0);
        return this.#list;
    }

    getItem(index){
        return this.#list[index]
    }

    deleteItem(index){

    }

    async saveItem(name, image){
        const pic = new Pic(name, image);
        const lastPic = this.lastItem;
        const index = !!lastPic ? lastPic.index + 1 : 0
        if(lastPic){
            lastPic.next = index;
            await AsyncStorage.setItem(`${lastPic.index}`, strLastPic)
        } 
        const strPic = JSON.stringify(pic)
        await AsyncStorage.setItem(`${index}`, strPic)
        const strLastPic = JSON.stringify(lastPic)
    }
}