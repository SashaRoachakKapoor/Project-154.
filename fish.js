AFRAME.registerComponent('fishes',{
    init:function(){
        for(r=1;r<=20;r++){
            var id=`fish${r}`
            // Position Variables
    var posX=(Math.random()* 3000 + (-1000));
    var posY=(Math.random() * 2 + (-1));
    var posZ=(Math.random() * 3000 + -1000);
    var position={x:posX,y:posY,z:posZ}
    this.create_fishes(id,position)
        }
    },
    create_fishes:function(id,pos){
        var island_el=document.querySelector('#island')
        var fish_el=document.createElement('a-entity')
        fish_el.setAttribute('id',id)
        fish_el.setAttribute('position',pos)
        fish_el.setAttribute('scale',{x:500,y:500,z:500})
        fish_el.setAttribute('gltf-model','assets/fish/scene.gltf')
        fish_el.setAttribute('animation-mixer',{})
        island_el.appendChild(fish_el)
    }
})