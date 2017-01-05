package com.tppolytech.projetcinema.controllers;

import com.tppolytech.projetcinema.models.ActeurEntity;
import com.tppolytech.projetcinema.DAO.ActeurDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.sql.Date;
import java.util.ArrayList;

/**
 * Created by syl on 10/10/2016.
 */
@RequestMapping(value="/acteur")
@Controller
public class ActeurController {

    @Autowired
    private ActeurDAO _acteurController;

    // localhost:8080/acteur/save?nomAct=syl&prenAct=Beg&dateNaiss=2000-01-01&dateDeces=2000-01-02
    @RequestMapping(value = "/save")
    @ResponseBody
    public ActeurEntity create(String nomAct, String prenAct, Date dateNaiss, Date dateDeces) {
        try {
            ActeurEntity acteur = new ActeurEntity();
            acteur.setNomAct(nomAct);
            acteur.setPrenAct(prenAct);
            acteur.setDateNaiss(dateNaiss);
            acteur.setDateDeces(dateDeces);
            _acteurController.save(acteur);
            return acteur;
        } catch (Exception ex) {
            return null;
        }
    }

    // localhost:8080/acteur/getall
    @RequestMapping(value="/getall")
    @ResponseBody
    public ArrayList<ActeurEntity> getAll() {
        ArrayList<ActeurEntity> acteurList = (ArrayList<ActeurEntity>) _acteurController.getAll();
        return acteurList;
    }

    // localhost:8080/acteur/getbyid?noAct=2
    @RequestMapping(value="/getbyid")
    @ResponseBody
    public ActeurEntity getId(int noAct) {
        return _acteurController.getById(noAct);
    }

    // localhost:8080/acteur/update?noAct=3&nomAct=syl&prenAct=Beg&dateNaiss=2000-01-01&dateDeces=2000-01-02
    @RequestMapping(value="/update")
    @ResponseBody
    public ActeurEntity update(int noAct, String nomAct, String prenAct, Date dateNaiss, Date dateDeces) {
        ActeurEntity acteur = new ActeurEntity();
        acteur.setNoAct(noAct);
        acteur.setNomAct(nomAct);
        acteur.setPrenAct(prenAct);
        acteur.setDateNaiss(dateNaiss);
        acteur.setDateDeces(dateDeces);
        _acteurController.update(acteur);
        return acteur;
    }

    // localhost:8080/acteur/delete?noAct=2
    @RequestMapping(value="/delete")
    @ResponseBody
    public void delete(int noAct) {
        _acteurController.delete(_acteurController.getById(noAct));
    }

}
