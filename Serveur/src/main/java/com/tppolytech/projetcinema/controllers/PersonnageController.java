package com.tppolytech.projetcinema.controllers;

import com.tppolytech.projetcinema.DAO.ActeurDAO;
import com.tppolytech.projetcinema.DAO.FilmDAO;
import com.tppolytech.projetcinema.DAO.PersonnageDAO;
import com.tppolytech.projetcinema.models.FilmEntity;
import com.tppolytech.projetcinema.models.PersonnageEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by syl on 26/11/2016.
 */

@RequestMapping(value="/personnage")
@Controller
public class PersonnageController {

    @Autowired
    private PersonnageDAO _personnageController;

    @Autowired
    private FilmDAO _filmController;

    @Autowired
    private ActeurDAO _acteurController;


    //localhost:8080/personnage/save?noAct=2&noFilm=3&nomPers=Aladin
    @RequestMapping(value = "/save")
    @ResponseBody
    public PersonnageEntity create(int noAct, int noFilm, String nomPers) {
        try {
            if (_personnageController.isExit(noAct, noFilm) || !_acteurController.isExist(noAct) || !_filmController.isExist(noFilm)) {
                return null;
            }
            PersonnageEntity personnage = new PersonnageEntity();
            personnage.setNoAct(noAct);
            personnage.setNoFilm(noFilm);
            personnage.setNomPers(nomPers);
            _personnageController.save(personnage);
            return personnage;
        } catch (Exception ex) {
            return null;
        }
    }

    @RequestMapping(value="/getall")
    @ResponseBody
    public ArrayList<PersonnageEntity> getAll() {
        ArrayList<PersonnageEntity> personnageList = (ArrayList<PersonnageEntity>) _personnageController.getAll();
        return personnageList;
    }

    @RequestMapping(value="/getPersonnageByActeur")
    @ResponseBody
    public List<PersonnageEntity> getPersonnageByActeur(int noAct) {
        return _personnageController.getPersonnageByActeur(noAct);
    }

}
