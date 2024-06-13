AFRAME.registerComponent('treasures',{
    init:function(){
        for(s=1;s<=10;s++){
            var id=`treasure${s}`
            //Position Variables
            var posX=(Math.random() * 3000 + (-1000));
            var posY=(Math.random() * 2 + (-1));
            var posZ=(Math.random() * 3000 + -1000);
            var position={x:posX,y:posY,z:posZ}
            this.create_treasures(id,position)
        }
    },
    create_treasures:function(id,pos){
        var island_el=document.querySelector('#island')
        var treasure_el=document.createElement('a-entity')
        treasure_el.setAttribute('id',id)
        treasure_el.setAttribute('position',pos)
        treasure_el.setAttribute('material',{color:'yellow'})
        treasure_el.setAttribute('geometry',{primitive:"circle"})
        treasure_el.setAttribute('animation',{
            property:'rotation',
            to:'0 360 0',
            loop:'true',
            dur:1000
        })
        island_el.appendChild(treasure_el)

    }
})