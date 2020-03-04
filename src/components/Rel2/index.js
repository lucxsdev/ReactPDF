import React, { Component } from 'react';
import { PDFDownloadLink } from "@react-pdf/renderer";

import { PdfDocumentt } from "./templates";


import { 
    Container, 
    InputItem, 
    Form, 
    Input, 
    TextArea, 
    Label, 
    Central, 
    ButtonPlus, 
    Border, 
    BorderFlex,
    ContainerPlus
} from './styles';

class Rel2 extends Component{

    constructor(props) {
        super(props);

         this.uploadedImage = React.createRef(null);

         this.state = { 
             
            referencia: '',
            razaoSocial: '',
            fantasia:'',
            quantidade: '',
            acabamentos: '',
            rotativo:'',

            aplicacao: '',
            contraplaca: '',
            strass:'',
            peso: '',
            medidas: '',
            observacao:'',

            dateNow:'00/00/0000',

            uploadedImageState: '',

            addInput: 1,

            addArrayInput: {}
             
         };

         this.onDrop = this.onDrop.bind(this);

         this.onReferencia = this.onReferencia.bind(this);
         this.onRazaoSocial = this.onRazaoSocial.bind(this);
         this.onFantasia = this.onFantasia.bind(this);
         this.onQuantidade = this.onQuantidade.bind(this);
         this.onRotativo = this.onRotativo.bind(this);
         this.onAcabamentos = this.onAcabamentos.bind(this);

         this.onAplicacao = this.onAplicacao.bind(this);
         this.onContraplaca = this.onContraplaca.bind(this);
         this.onStrass = this.onStrass.bind(this);
         this.onPeso = this.onPeso.bind(this);
         this.onMedidas = this.onMedidas.bind(this);
         this.onObservacao = this.onObservacao.bind(this);
         this.onAddInput = this.onAddInput.bind(this);
         this.onAddQuant = this.onAddQuant.bind(this);
         this.onAddProgram = this.onAddProgram.bind(this);

    }

    onAddInput(){
        this.setState({
            addInput: this.state.addInput + 1
        })
    };

    onDrop(e) {
        const [file] = e.target.files;
        if (file) {
        const reader = new FileReader();
        const {current} = this.uploadedImage;
        current.file = file;
        reader.onload = (e) => {
            current.src = e.target.result;

            this.setState({
                uploadedImageState: e.target.result
            });
        }
        reader.readAsDataURL(file);
        }

        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0');
        let yyyy = today.getFullYear();

        today = dd + '/' + mm + '/' + yyyy;

        this.setState({
            dateNow: today
        });
    }

    onReferencia(e) {
        this.setState({
            referencia: e.target.value,
        });
    }

    onRazaoSocial(e) {
        this.setState({
            razaoSocial: e.target.value
        });
    }

    onFantasia(e) {
        this.setState({
            fantasia: e.target.value
        }); 
    }

    onQuantidade(e) {
        this.setState({
            quantidade: e.target.value
        });
    }

    onAcabamentos(e) {
        this.setState({
            acabamentos: e.target.value,
        });
    }

    onRotativo(e) {
        this.setState({
            rotativo: e.target.value
        });
    }

// -------------------------------------------
 

    onAplicacao(e) {
        this.setState({
            aplicacao: e.target.value,
        });
    }

    onContraplaca(e) {
        this.setState({
            contraplaca: e.target.value
        });
    }

    onStrass(e) {
        this.setState({
            strass: e.target.value
        });
    }

    onPeso(e) {
        this.setState({
            peso: e.target.value
        });
    }

    onMedidas(e) {
        this.setState({
            medidas: e.target.value,
        });
    }

    onObservacao(e) {
        this.setState({
            observacao: e.target.value
        });
    }

    onAddQuant(e) {

        let id = 'quant' + this.state.addInput;

        this.setState({
             addArrayInput: {
                ...this.state.addArrayInput,
                [id]: e.target.value
            }
        });
        console.log(this.state.addArrayInput);
    }

    onAddProgram(e) {

        let id = 'program' + this.state.addInput;

        this.setState({
             addArrayInput: {
                ...this.state.addArrayInput,
                [id]: e.target.value
            }
        });
        console.log(this.state.addArrayInput);
    }

    render(){
 
        let inputs = [];

        for(let i=0; i < this.state.addInput; i++){

    
            inputs.push(
                <Border key={i}>
              
                    <h3 className="h3">Item {i+1}</h3>
                   
                   <BorderFlex>
                        <InputItem>
                        <p>QUANT.</p>
                        <Input 
                        type="text" 
                        id={"idCustom1" + i}
                        onChange={this.onAddQuant}   
                        />
                    </InputItem>

                    <InputItem>
                        <p>PROGRAM.</p>
                        <Input 
                        type="text" 
                        id={"idCustom_2"  + i}
                        onChange={this.onAddProgram}   
                        />
                    </InputItem>

                    <InputItem>
                        <p>PRODUTOS</p>
                        <Input 
                        type="text" 
                        id={"idCustom_3"  + i}
                        onChange={this.onAddArrayInput}   
                        />
                    </InputItem>

                    <InputItem>
                        <p>COR</p>
                        <Input 
                        type="text" 
                        id={"idCustom_4"  + i}
                        onChange={this.onAddArrayInput}   
                        />
                    </InputItem>

                    <InputItem>
                        <p>MATERIAL</p>
                        <Input 
                        type="text" 
                        id={"idCustom_5" + i}
                        onChange={this.onAddArrayInput}   
                        />
                    </InputItem>

                    <InputItem>
                        <p>ARTE</p>
                        <Input 
                        type="text" 
                        id={"idCustom_6" + i}
                        onChange={this.onAddArrayInput}   
                        />
                    </InputItem>

                    <InputItem>
                        <p>R$ ANT</p>
                        <Input 
                        type="text" 
                        id={"idCustom_7" + i}
                        onChange={this.onAddArrayInput}   
                        />
                    </InputItem>                

                    <InputItem/>
                    <InputItem/>
                    <InputItem/>
                    <InputItem/>
                    <InputItem/>
                    <InputItem/>
                    <InputItem/>
                    <InputItem/>

                   </BorderFlex>

                </Border>
            )
        }

        return(
        <>
        <Container>

            <h3 className="h3">Ficha de Solicitação de preço</h3>

                <Form>
                    <InputItem>
                        <p>Refêrencia</p>
                        <Input 
                        type="text" 
                        id="referencia"
                        value={this.state.referencia}
                        onChange={this.onReferencia}   
                        />
                    </InputItem>

                    <InputItem>
                        <p>Razão Social</p>
                        <Input 
                        type="text" 
                        id="razaoSocial"
                        value={this.state.razaoSocial}
                        onChange={this.onRazaoSocial}   
                        />
                    </InputItem>

                    <InputItem>
                        <p>Nome Fantasia</p>
                        <Input 
                        type="text" 
                        id="fantasia"                       
                        value={this.state.fantasia}
                        onChange={this.onFantasia}   
                        />
                    </InputItem>

                    <InputItem>
                        <p>Quantidade</p>
                        <Input 
                        type="text" 
                         id="quantidade"  
                        value={this.state.quantidade}
                        onChange={this.onQuantidade}
                        />
                    </InputItem>

                     <InputItem>
                        <p>Acabamentos</p>
                        <Input 
                        type="text" 
                        id="acabamentos"
                        value={this.state.acabamentos}
                        onChange={this.onAcabamentos}   
                        />
               
                    </InputItem>

                    <InputItem>
                        <p>Rotativo ou Parado</p>
                        <Input 
                        type="text" 
                        id="rotativo"                       
                        value={this.state.rotativo}
                        onChange={this.onRotativo}   
                        />
                    </InputItem>

{/* -------------------------------------------------------------------------------------- */}

                    <InputItem>
                        <p>Aplicação</p>
                        <Input 
                        type="text" 
                        id="aplicacao"
                        value={this.state.aplicacao}
                        onChange={this.onAplicacao}   
                        />
                    </InputItem>

                    <InputItem>
                        <p>Vai contraplaca?</p>
                        <Input 
                        type="text" 
                        id="contraplaca"
                        value={this.state.contraplaca}
                        onChange={this.onContraplaca}   
                        />
                    </InputItem>

                    <InputItem>
                        <p>Strass</p>
                        <Input 
                        type="text" 
                        id="strass"                       
                        value={this.state.strass}
                        onChange={this.onStrass}   
                        />
                    </InputItem>

                    <InputItem>
                        <p>Peso</p>
                        <Input 
                        type="text" 
                         id="peso"  
                        value={this.state.peso}
                        onChange={this.onPeso}
                        />
                    </InputItem>

                     <InputItem>
                        <p>Medidas</p>
                        <Input 
                        type="text" 
                        id="medidas"
                        value={this.state.medidas}
                        onChange={this.onMedidas}   
                        />
                    </InputItem>

                    <InputItem>
                        <p>Observaçôes Adicionais</p>
                        <TextArea 
                        type="text" 
                        id="observacao"                       
                        value={this.state.observacao}
                        onChange={this.onObservacao}   
                        />
                    </InputItem>         

                    <ContainerPlus>
                        <ButtonPlus onClick={this.onAddInput} > + </ButtonPlus>
                    </ContainerPlus> 
                                                                   
                    {inputs}                         
                  
                    <Central>
                        <input type="file" accept="image/*"  id="file-upload" onChange={this.onDrop} multiple={false}/>
                        <Label htmlFor="file-upload">
                            Selecione a imagem
                        </Label>
                    </Central>
                        
                        <img
                        ref={this.uploadedImage}
                        style={{
                            width: "20%",
                            height: "20%",
                            position: "absolute",
                            display: "none"
                        }}
                        />
                    
                    <PDFDownloadLink
                        document={<PdfDocumentt data={this.state} />}
                        fileName="relatorio.pdf"
                        className="max-button"
                        style={{
                            textDecoration: "none",
                            margin: "20px auto",
                            display: "inline-block",
                            padding: "10px 60px",
                            background: "transparent",
                            border: "2px solid #5C2226",
                            fontSize: "16px",
                            color: "#5C2226",
                            borderRadius: "30px",
                            fontWeight: "bold"
                        }}
                        >
                            
                        {({ blob, url, loading, error }) =>
                            loading ? "Carregando PDF..." :  "Gerar PDF"
                        }
                    </PDFDownloadLink>

                </Form>

                <div>
                   
                </div>
    
       </Container>
        </>
    )
    }
};


export default Rel2;

