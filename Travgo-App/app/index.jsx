import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import VacationDeails from "../assets/images/VacationDetails.png";

export default function index() {
  return (
    <ScrollView>
      <Image source={VacationDeails} />
      <View
        style={{
          position: "relative",
          borderTopRightRadius: 50,
          borderTopLeftRadius: 50,
          backgroundColor: "red",
          top:-40
        }}
      >
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus unde
          incidunt pariatur quae ab eveniet explicabo non sint fuga minus nobis
          fugit possimus ipsa nihil atque quis necessitatibus consequatur
          aspernatur quisquam, ut velit odio dicta deleniti quo. Aspernatur
          autem ipsum quam corrupti asperiores eveniet temporibus voluptatem
          placeat quasi eaque vero repellat adipisci, saepe error recusandae
          earum iste ratione a optio quae velit eligendi debitis deleniti! Saepe
          quia veniam hic temporibus molestiae autem natus amet aut! Delectus
          provident placeat sequi iste officiis fugit labore cupiditate
          consectetur, consequatur quia tenetur rem pariatur necessitatibus
          sapiente voluptas impedit similique illo perspiciatis. Aspernatur fuga
          fugiat earum molestiae unde doloribus alias dolor saepe officiis
          aliquid voluptatum, perferendis quisquam commodi praesentium explicabo
          possimus. Mollitia, cum recusandae consequatur excepturi
          necessitatibus aliquid in exercitationem dolore officia quasi quod?
          Explicabo inventore voluptas iste deserunt minima voluptatibus dolorem
          possimus laborum, beatae eos totam rem suscipit eius magnam
          reprehenderit expedita error et fugiat est atque? Nobis ipsum expedita
          sed unde, qui consequatur repellendus? Dolor aspernatur sit,
          voluptatem excepturi placeat incidunt quia? Iste qui, deserunt nobis
          nesciunt fugit quos ratione molestias perspiciatis pariatur tenetur.
        </Text>
      </View>
    </ScrollView>
  );
}
