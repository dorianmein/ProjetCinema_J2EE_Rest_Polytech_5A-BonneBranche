package com.tppolytech.projetcinema.DAO;

import com.tppolytech.projetcinema.models.CategorieEntity;
import com.tppolytech.projetcinema.models.FilmEntity;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by syl on 07/11/2016.
 */
@Repository
@Transactional
public class FilmDAO {
    @Autowired
    private SessionFactory _sessionFactory;


    private Session getSession() {
        return _sessionFactory.getCurrentSession();
    }

    public void save(FilmEntity acteur) {
        getSession().save(acteur);
        return;
    }

    public void delete(FilmEntity acteur) {
        getSession().delete(acteur);
        return;
    }


    public List<FilmEntity> getAll() {
        return getSession().createQuery("from FilmEntity").list();
    }

    public FilmEntity getById(int id) {
        return getSession().get(FilmEntity.class, id);
    }

    public void update(FilmEntity film) {
        getSession().update(film);
        return;
    }

    // retourne si le film existe ou non
    public boolean isExist(int id) {
        Query query = getSession().createQuery("from FilmEntity where noFilm = id ");
        if (query.list().size() == 0) {
            return false;
        }
        return true;
    }

    public List<FilmEntity> rechercheFilm(int dureeMin, int dureeMax) {

        // HQL
        String query = "SELECT f FROM FilmEntity f WHERE duree >= :dureeMin AND duree <= :dureeMax";
        List<FilmEntity> films = getSession().createQuery(query).setInteger("dureeMin", dureeMin).setInteger("dureeMax", dureeMax).list();

        return films;
    }
}
