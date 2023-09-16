import { View } from "react-native";
import CustomCard from "../../../components/CustomCard";

export default function Krishna ()  {
    return(
        <View style={{alignItems:'center'}}>
            <CustomCard
                imageUri="https://cdn11.bigcommerce.com/s-x49po/images/stencil/1500x1500/products/86232/143783/KarnaKshatriyaMahabharataCollectionVimanika_na_834_63-673-677-1688_1655X1000_72__20926.1655536333.jpg?c=2&imbypass=on"
                description="Karna is one of the main protagonists of the Hindu epic Mahābhārata. He is the son of the sun god Surya and princess Kunti (mother of the Pandavas), and thus a demigod of royal birth. Kunti was granted the boon to bear a child with desired divine qualities from the gods and without much knowledge, Kunti invoked the sun god to confirm it if it was true indeed. Karna was secretly born to an unmarried Kunti in her teenage years, and fearing outrage and backlash from society over her premarital pregnancy, Kunti had no choice but to abandon the newly born Karna adrift in a basket on the Ganges."
            />
        </View>
    );
};