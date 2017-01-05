package com.tppolytech.projetcinema.controllers;

import com.tppolytech.projetcinema.DAO.FilmDAO;
import com.tppolytech.projetcinema.DAO.RealisateurDAO;
import com.tppolytech.projetcinema.models.ActeurEntity;
import com.tppolytech.projetcinema.models.FilmEntity;
import com.tppolytech.projetcinema.models.RealisateurEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.sql.Date;
import java.util.ArrayList;

/**
 * Created by syl on 07/11/2016.
 */
@RequestMapping(value="/realisateur")
@Controller
public class RealisateurController {
    @Autowired
    private RealisateurDAO _realisateurController;


    //localhost:8080/realisateur/save?nomRea=jean&prenRea=Baptiste
    @RequestMapping(value = "/save")
    @ResponseBody
    public RealisateurEntity create(String nomRea, String prenRea) {
        try {
            RealisateurEntity realisateur = new RealisateurEntity();
            realisateur.setNomRea(nomRea);
            realisateur.setPrenRea(prenRea);
            _realisateurController.save(realisateur);
            return realisateur;
        } catch (Exception ex) {
            return null;
        }
    }

    @RequestMapping(value="/getall")
    @ResponseBody
    public ArrayList<RealisateurEntity> getAll() {
        ArrayList<RealisateurEntity> acteurList = (ArrayList<RealisateurEntity>) _realisateurController.getAll();
        return acteurList;
    }


    //  localhost:8080/realisateur/getbyid?noRea=2
    @RequestMapping(value="/getbyid")
    @ResponseBody
    public RealisateurEntity getId(int noRea) {
        return _realisateurController.getById(noRea);
    }

    //  localhost:8080/realisateur/update?noRea=2&nomRea=jean&prenRea=Baptiste
    @RequestMapping(value="/update")
    @ResponseBody
    public RealisateurEntity update(int noRea, String nomRea, String prenRea) {
        RealisateurEntity realisateur = new RealisateurEntity();
        realisateur.setNoRea(noRea);
        realisateur.setNomRea(nomRea);
        realisateur.setPrenRea(prenRea);
        _realisateurController.update(realisateur);
        return realisateur;
    }

    //  localhost:8080/realisateur/delete?noRea=2
    @RequestMapping(value="/delete")
    @ResponseBody
    public void delete(int noRea) {
        _realisateurController.delete(_realisateurController.getById(noRea));
    }
}
