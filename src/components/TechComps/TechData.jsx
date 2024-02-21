import launch from '../../assets/images/technology/launch-vehicle-portrait.jpg'
import spaceport from '../../assets/images/technology/spaceport-portrait.jpg'
import space from '../../assets/images/technology/space-capsule-portrait.jpg'
import launchlandscape from '../../assets/images/technology/launch-vehicle-landscape.jpg'
import spaceportlandscape from '../../assets/images/technology/spaceport-landscape.jpg'
import spacelandscape from '../../assets/images/technology/space-capsule-landscape.jpg'

export default {
  "technology": [
    {
      "name": "Launch vehicle",
      "image": {
        "desktop": launch,
        "mobile": launchlandscape
      },
      "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    },
    {
      "name": "Spaceport",
      "image": {
        "desktop": spaceport,
        "mobile": spaceportlandscape
      },
      "description": "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
    },
    {
      "name": "Space capsule",
      "image": {
        "desktop": space,
        "mobile": spacelandscape
      },
      "description": "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    }
  ]
}