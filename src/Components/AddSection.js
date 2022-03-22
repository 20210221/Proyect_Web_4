
function AddSection() {
    return (

        <div id = "addContactSection" className="addContactSection">
        <button id="addContact-btn" className="addContact-btn"><span className="icon-user-plus"></span> Nuevo Contacto</button>
        <div id = "addContactArea" className="addContactArea">
           <form className="formSection">
            <p className="TitleSize"><span className="icon-address-book"></span>Agregar Contacto</p>
            <p className="label">Nombre</p>
            <input required minlength="4" maxlength="15" id = "NameContact" placeholder="Introduzca Nombre..." type="text" className="DataContact" />
            <p className="label">Apellido</p>
            <input required minlength="4" maxlength="20" id = "LNameContact" placeholder="Introduzca Apellido..." type="text" className="DataContact" />
            <p className="label">Teléfono</p>
            <input required minlength="8" maxlength="15" id = "PhoneContact" placeholder="Introduzca Teléfono..." type="text"  className="DataContact" />

           <div className="ContactActionsSection">
            <button type="submit" id = "btnAccept"  className="btnAccept">Agregar</button>
            <button id = "btnCancel"  className="btnCancel">Cancelar</button>
           </div>

           </form>
        </div>
    </div>
      
      
    );
  }
  
  export default AddSection;