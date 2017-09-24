import { Map } from "./map"
import { Mapping } from "./map"

export class Scanner {
	private prefix = "rock-";
	private rock :object;

	constructor(rock :object) {
		this.rock = rock;
        this.prefix = rock.prefix;
	}

	// 
	public scan() :Array<Map>{
		console.log('scan--------');
        let mapList : Array<Map> =[];
        // 扫描所有元素
		let allChildren = document.querySelectorAll("*");
		for (let i = 0; i < allChildren.length; i++) {
            let child: HTMLElement = allChildren[i] as HTMLElement;
            let mappingList: Array<Mapping> = [];
            // 扫描所有attribute找到mapping
            for (let j = 0; j < child.attributes.length; j++) {
                let attr = child.attributes[j];
                // console.log('attr:',attr);
                // 把带prefix的属性加到mapping
                if (attr.nodeName.search(this.prefix) > -1) {
                    let rock_attr = attr.nodeName.substring(attr.nodeName.indexOf('-')+1);
                    // 解析vm.xxx
                    let result = attr.value.split(/\./);

                    if(result.length > 1){
                        let alias :string = result[0];
                        let vm_attr = result[1];
                        // 匹配已注册的view model
                        let viewmodel = this.rock.getViewModel(alias);
                        if(viewmodel){
                            // 加入mapping
                            mappingList.push(new Mapping(rock_attr, viewmodel, vm_attr));
                            // console.log('add alias:',alias,' attr:',rock_attr);
                        }
                    } 
                }
            }
            // 加入map
            if(mappingList.length > 0) mapList.push(new Map(child, mappingList));
        }
        // console.log(mapList);
        return mapList;
	}
}