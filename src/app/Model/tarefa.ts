export class tarefa{
    private nome: string;
    private responsavel:string;

    public constructor(nome:string, responsavel:string){
        this.nome =nome;
        this.responsavel = responsavel;
    }

    public getnome():string{
        return this.nome;
    }
    public getresponsavel():string{
           return this.responsavel;  
    }
    public setnome(nome: string): void{
        this.nome =nome;
    }
    public setresponsalvel(responsavel: string): void{
           this.responsavel = responsavel;
    }
}

//MODEL- objetos que armazenam dados correspondentes do nosso sistema