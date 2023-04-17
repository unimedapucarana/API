function defineStructure() {

}
function onSync(lastSyncDate) {

}
function createDataset(fields, constraints, sortFields) {
	var newDataset = DatasetBuilder.newDataset();;
	

	
	var myQuery = "" +
			"SELECT VENDEDOR_NOME, VISITA_DATA_INICIO, VISITA_DATA_FIM, VISITA_MOTIVO, CONTA_NOME_FANTASIA, VISITA_STATUS  FROM crm151.VIEW_VISITA" ;
           

	var c1 = DatasetFactory.createConstraint('query', myQuery, myQuery, ConstraintType.MUST);
	var c2 = DatasetFactory.createConstraint('servico', "CRM", "CRM", ConstraintType.MUST);
	var ds = DatasetFactory.getDataset("ds_executorQuery", null, new Array(c1,c2),null);
	
    return ds;
}
function onMobileSync(user) {

} 
