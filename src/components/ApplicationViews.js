import { Route, Redirect, } from "react-router-dom";
import React from "react";
import Login from "./auth/Login";
import Home from "./home/Home";
import AnimalList from "./animal/AnimalList";
import AnimalForm from './animal/AnimalForm';
import AnimalDetail from "./animal/AnimalDetail"
import AnimalEditForm from "./animal/AnimalEditForm";
import LocationList from "./location/LocationList";
import LocationForm from './location/LocationForm';
import LocationWithEmployees from './location/LocationWithEmployees';
import LocationEditForm from "./location/LocationEditForm"
import EmployeeList from "./employee/EmployeeList";
import EmployeeWithAnimals from "./employee/EmployeeWithAnimals";
import EmployeeForm from "./employee/EmployeeForm";
import EmployeeEditForm from "./employee/EmployeeEditForm";
import OwnerList from "./owner/OwnerList";
import OwnerForm from "./owner/OwnerForm";
import OwnerEditForm from "./owner/OwnerEditForm";

const ApplicationViews = props => {
  const hasUser = props.hasUser;
  const setUser = props.setUser;

  
  return (
      <React.Fragment>
        <Route
          exact
          path="/"
          render={props => {
            return <Home />;
          }}
        />

      <Route path="/login" render={props => {
          return <Login setUser={setUser} hasUser={hasUser} {...props} />
        }} />

      <Route exact path="/animals" render={props => {
        if (hasUser) {
          return <AnimalList {...props} />
        } else {
          return <Redirect to="/login" />
          }
       }} 
      />

      <Route 
        exact 
        path="/animals/:animalId(\d+)"
        render={props => {
          if (hasUser){
          return (
            <AnimalDetail
              animalId={parseInt(props.match.params.animalId)} {...props} />
           )} else {
            return <Redirect to="/login" />
           }
         }}
       />

      <Route path="/animals/:animalId(\d+)/edit" render={props => {
        if (hasUser) {
          return <AnimalEditForm {...props} />
        } else {
          return <Redirect to="/login" />
         }
        }}
      />
    
      <Route path="/animals/new" render={(props) => {
        return <AnimalForm {...props} />
        }} />




      {/*LOCATIONS */}
        <Route
          exact
          path="/locations"
          render={props => {
              return <LocationList {...props} />;
        }}
        />

        <Route 
          exact
          path="/locations/:locationId(\d+)" render={props => {
            return( 
            <LocationWithEmployees {...props} />
            );
          }}
        />

        <Route path="/locations/:locationId(\d+)/edit" render={props => {
          if (hasUser) {
            return <LocationEditForm {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        
        <Route path="/locations/new" render={(props) => {
          return <LocationForm {...props} />
          }} 
        />




        {/*EMPLOYEES */}
        <Route
          exact
            path="/employees"
            render={props => {
              if (hasUser) {
                return <EmployeeList  {...props} />;
            } else {
              return <Redirect to="/login" />
            }
          }}
        />

        <Route path="/employees/:employeeId(\d+)/details" render={(props) => {
          return <EmployeeWithAnimals {...props} />
        }} />

        <Route exact path="/employees/new" render={(props) => {
          return <EmployeeForm {...props} />
        }} />

        <Route path="/employees/:employeeId(\d+)/edit" render={props => {
          if (hasUser) {
            return <EmployeeEditForm {...props} />
          } else {
            return <Redirect to="/logiin" />
          }
        }} />
        




        {/*OWNERS*/}
        <Route 
            exact
            path="/owners"
            render={props => {
              if (hasUser) {
                return <OwnerList  {...props} />;
            } else {
              return <Redirect to="/login/" />
            }
          }}
        />

        <Route path="/owners/new" render={(props) => {
          return <OwnerForm {...props} />
        }}
        />

        <Route path="/owners/:ownerId(\d+)/edit" render={props => {
          if (hasUser) {
            return <OwnerEditForm {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
    </React.Fragment>
  );
};

export default ApplicationViews;