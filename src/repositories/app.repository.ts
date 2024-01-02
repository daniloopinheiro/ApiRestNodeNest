export class AppRepository{
    private apps = [];

    async salvar(app){
        this.apps.push(app);
    }

    async listHello(){
        return this.apps;
    }
}
