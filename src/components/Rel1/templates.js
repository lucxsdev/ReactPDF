import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff"
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  movieContainer: {
    backgroundColor: "#f6f6f5",
    display: "flex",
    flexDirection: "row",
    padding: 5
  },
  movieDetails: {
    display: "flex",
    marginLeft: 5
  },
  
  movieOverview: {
    fontSize: 10
  },

  image: {
    height: 200,
    width: 150
  },
  subtitle: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    width: 150,
    alignItems: "center",
    marginBottom: 12
  },
  vote: {
    display: "flex",
    flexDirection: "row"
  },
  rating: {
    height: 10,
    width: 10
  },
  vote_text: {
    fontSize: 10
  },
  vote_pop: {
    fontSize: 10,
    padding: 2,
    backgroundColor: "#61C74F",
    color: "#fff"
  },
  vote_pop_text: {
    fontSize: 10,
    marginLeft: 4
  },
  overviewContainer: {
    minHeight: 110
  },
  detailsFooter: {
    display: "flex",
    flexDirection: "row"
  },
  lang: {
    fontSize: 8,
    fontWeight: 700
  },
  vote_average: {
    fontSize: 8,
    marginLeft: 4,
    fontWeight: "bold"
  },

  // ------------

  titleBlack: {
    margin: 15,
    backgroundColor: "black",
    color: "#fff",
    display: "flex",
    flexDirection: "row",
    padding: 5,
    textAlign: "center"
  },

  containerItem: {
    backgroundColor: "#f5f5f5",
    marginLeft: 15,
    marginRight: 15,
    display: "flex",
    flexDirection: "row",
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 2,
    paddingBottom: 2,
    textAlign: "left",
    flexWrap: "wrap",
  },

  containerItemLight: {
    backgroundColor: "#ececec",
    marginLeft: 15,
    marginRight: 15,
    display: "flex",
    flexDirection: "row",
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 2,
    paddingBottom: 2,
    textAlign: "left",
    flexWrap: "wrap",

  },

  obsLight: {
    backgroundColor: "#ececec",
    marginLeft: 15,
    marginRight: 15,
    display: "flex",
    flexDirection: "row",
    paddingLeft: 50,
    paddingRight: 5,
    textAlign: "left"
  },

   obs: {
    backgroundColor: "#f5f5f5",
    marginLeft: 15,
    marginRight: 15,
    display: "flex",
    flexDirection: "row",
    paddingLeft: 50,
    paddingRight: 5,
    textAlign: "left"
  },

  headerTitle: {
    fontSize: 13,
    padding: 5,
  },

  itemTitle: {
 
    fontSize: 10,
    padding: 3,
  },

   itemTitleCenter: {
     textAlign: "center",
    fontSize: 10,
    padding: 3,
  },

  itemTitleQuebra: {
    flexBasis: 500,
    width: 0,
    fontSize: 10,
    padding: 3,
  },

  itemTitleObs: {
    fontSize: 9,
    padding: 3,
  },

  containerItemImage: {
    marginTop: 20,
    marginBottom: 40,
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 2,
    paddingBottom: 2,
  },

   imagee: {
    height: "auto",
    width: 200
  },

   containerItemSpace: {
    backgroundColor: "#ececec",
    marginLeft: 15,
    marginRight: 15,
    display: "flex",
    flexDirection: "row",
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 2,
    paddingBottom: 2,
    justifyContent: "space-between",
    textAlign: "left",
    flexWrap: "wrap",
  },



});


export function PdfDocumentt(props) {

  return (
    <Document>
      <Page style={styles.page}>
        
        <View style={styles.titleBlack}>
          <Text style={styles.headerTitle}>FICHA DE SOLICITAÇÃO DE PREÇO - KSD METAIS</Text> 
        </View>

        <View style={styles.containerItem}>
          <Text style={styles.itemTitle}>Referência:</Text> 
          <Text style={styles.itemTitle}>{props.data.referencia}</Text>
        </View>

        <View style={styles.containerItemLight}>
          <Text style={styles.itemTitle}>Razão Social:</Text> 
          <Text style={styles.itemTitle}>{props.data.razaoSocial}</Text>
        </View>

        <View style={styles.containerItem}>
          <Text style={styles.itemTitle}>Nome Fantasia:</Text> 
          <Text style={styles.itemTitle}>{props.data.fantasia}</Text>
        </View>

        <View style={styles.containerItemLight}>
          <Text style={styles.itemTitle}>Quantidade:</Text> 
          <Text style={styles.itemTitle}>{props.data.quantidade}</Text>
        </View>

        <View style={styles.containerItem}>
          <Text style={styles.itemTitle}>Acabamentos:</Text> 
          <Text style={styles.itemTitleQuebra}>{props.data.acabamentos}</Text>
        </View>

        <View style={styles.containerItemLight}>
          <Text style={styles.itemTitle}>Rotativo ou Parado:</Text> 
          <Text style={styles.itemTitle}>{props.data.rotativo}</Text>
        </View>
        <View style={styles.containerItem}>
          <Text style={styles.itemTitle}> </Text>
        </View>
        <View style={styles.containerItemLight}>
          <Text style={styles.itemTitle}> </Text>
        </View>
        <View style={styles.containerItem}>
          <Text style={styles.itemTitle}> </Text>
        </View>

         <View style={styles.containerItemLight}>
          <Text style={styles.itemTitle}>Aplicação:</Text> 
          <Text style={styles.itemTitle}>{props.data.aplicacao}</Text>
        </View>
        <View style={styles.obsLight}>
          <Text style={styles.itemTitleObs}>Obs.: Quando rebite mencionar o material, tamanho e acabamento.</Text>
        </View>

        <View style={styles.containerItem}>
          <Text style={styles.itemTitle}>Vai contraplaca?</Text> 
          <Text style={styles.itemTitle}>{props.data.contraplaca}</Text>
        </View>
        <View style={styles.obs}>
          <Text style={styles.itemTitleObs}>Obs.: Mencionar o acabamento da contraplaca.</Text>
        </View>

         <View style={styles.containerItemLight}>
          <Text style={styles.itemTitle}>Strass:</Text> 
          <Text style={styles.itemTitle}>{props.data.strass}</Text>
        </View>
        <View style={styles.obsLight}>
          <Text style={styles.itemTitleObs}>Obs.: Informar a quantidade e a cor do strass.</Text>
        </View>

        <View style={styles.containerItem}>
          <Text style={styles.itemTitle}>Peso:</Text> 
          <Text style={styles.itemTitle}>{props.data.peso}</Text>
        </View>

         <View style={styles.containerItemLight}>
          <Text style={styles.itemTitle}>Medidas:</Text> 
          <Text style={styles.itemTitle}>{props.data.medidas}</Text>
        </View>

        <View style={styles.containerItem}>
          <Text style={styles.itemTitleCenter}>OBSERVAÇÕES ADICIONAIS</Text> 
          <Text style={styles.itemTitleQuebra}>{props.data.observacao}</Text>
        </View>

        <View style={styles.containerItemLight}>
          <Text style={styles.itemTitleCenter}>IMAGEM OU PEÇA COLADA</Text> 
        </View>

         <View style={styles.containerItemImage}>
             <Image
                style={styles.imagee}
                source={props.data.uploadedImageState}
              />          
        </View>

        <View style={styles.containerItemSpace}>
          <Text style={styles.itemTitle}>Solicitante:</Text> 
          <Text style={styles.itemTitle}>LÓTUS REPRESENTAÇÕES </Text>
          <Text style={styles.itemTitle}>Data: {props.data.dateNow}</Text> 
        </View>

      </Page>
    </Document>
  );
}




